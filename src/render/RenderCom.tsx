import {I_Node} from "@mybricks/compiler-js";
import * as css from './skin.less'
import {useStub} from './ExeMonitor'

export default function RenderCom({
                                    node,
                                    comDefs,
                                    env,
                                    runtimeCfg,
                                    logger,
                                    slotIo,
                                    rtMaps
                                  }: { node: {} & I_Node, comDefs, env, runtimeCfg, logger, slotIo: any, rtMaps: {} }) {
  const {slots: comSlots, runtime, parent} = node

  const myKey = `${runtime.def.namespace + '@' + runtime.def.version} (id=${runtime.id})`
  useStub(() => {
    throw new Error(`${myKey} 渲染次数过多,代码中可能存在循环依赖的情况,请检查.`)
  }, myKey)


  const rtType = runtime.def.rtType

  if (rtType && rtType.match(/js/gi)) {//逻辑组件
    return
  }

  const nodeModel = runtime.model

  const comRuntime = comDefs[runtime.def.namespace + '@' + runtime.def.version]
  const rt = rtMaps[runtime.id]

  const {inputs, outputs, fork} = rt.io
  let nInputs = inputs, nOutputs = outputs
  // 当slot有io时，rt.io里merge slotIo的输入输出，参考designer的debugrunner里render代码
  if (inputs && slotIo?.inputs) {
    nInputs = fork('inputs', slotIo.inputs)
  }
  if (outputs && slotIo?.outputs) {
    nOutputs = fork('outputs', slotIo.outputs)
  }

  const slots = {}
  if (comSlots) {
    comSlots.forEach(slot => {
      slots[slot.id] = {
        id: slot.id,
        title: slot.title,
        //comAry:slot.comAry,
        render(...args) {
          const {frames} = rtMaps[runtime.id]
          const fn = frames[slot.id]
          if (typeof fn === 'function') {
            fn()//兼容之前的非框图
          }
          const comAry = slot.comAry
          return (
            <section className={calSlotStyle(slot)} style={{overflow: 'hidden'}}>
              {
                comAry.map(com => {
                    return (
                      <RenderCom slotIo={args[0]} key={com.runtime.id} node={com} comDefs={comDefs} env={env}
                                 runtimeCfg={runtimeCfg} logger={logger} rtMaps={rtMaps}/>
                    )
                  }
                )
              }
            </section>
          )
        },
        get size() {
          return slot.comAry.length
        }
      }
    })
  }

  const style = nodeModel.style

  // TODO 临时解决设置上下负边距的问题
  const otherStyle: any = {}

  // if (style.marginTop < 0) {
  //   otherStyle.marginTop = style.marginTop + 'px'
  // } else {
  //   otherStyle.paddingTop = style.marginTop + 'px'
  // }

  // if (style.marginBottom < 0) {
  //   otherStyle.marginBottom = style.marginBottom + 'px'
  // } else {
  //   otherStyle.paddingBottom = style.marginBottom + 'px'
  // }

  switch (true) {
    case ['fixed'].includes(style.position): {
      otherStyle.position = 'fixed'
      otherStyle.zIndex = style.zIndex;
      style.fixedX === 'right' ? (otherStyle.right = style.right + 'px') : (otherStyle.left = style.left + 'px');
      style.fixedY === 'bottom' ? (otherStyle.bottom = style.bottom + 'px') : (otherStyle.top = style.top + 'px');
      break
    }
    // 自身是绝对 || 跟随绝对定位的父组件
    case ['absolute'].includes(style.position) || (parent.style.layout === 'absolute' && style.position === undefined): {
      otherStyle.position = 'absolute'
      otherStyle.zIndex = style.zIndex;
      otherStyle.top = style.top + 'px';
      otherStyle.left = style.left + 'px';
      break
    }
    default: {
      break
    }
  }

  const nenv = Object.assign({
    runtime: runtimeCfg || {}
  }, env || {})

  const classes = getClasses({node, style})
  const sizeStyle = getSizeStyle({style})
  const marginStyle = getMarginStyle({style})

  return (
    <div id={node.runtime.id} style={{
      display: style.display,
      overflow: 'hidden',
      // paddingTop: style.marginTop + 'px',
      // paddingBottom: style.marginBottom + 'px',
      // paddingLeft: style.marginLeft + 'px',
      // paddingRight: style.marginRight + 'px',
      position: style.position || 'relative',
      ...otherStyle,
      ...sizeStyle,
      ...marginStyle,
      ...(style.ext || {})
    }} className={classes}>
      {
        comRuntime({
          slots: slots,
          env: nenv,
          data: nodeModel.data,
          title: node.runtime.title,
          style,
          inputs: nInputs,
          outputs: nOutputs,
          logger: logger(node.runtime)
        })
      }
    </div>)
  //}
}

function calSlotStyle(model) {
  const rtn = [css.slot]

  const style = model.style
  if (style) {
    if (style.layout?.toLowerCase() == 'flex-column') {
      rtn.push(css.lyFlexColumn)
    } else if (style.layout?.toLowerCase() == 'flex-row') {
      rtn.push(css.lyFlexRow)
    }

    const justifyContent = style.justifyContent
    if (justifyContent) {
      if (justifyContent.toUpperCase() === 'FLEX-START') {
        rtn.push(css.justifyContentFlexStart)
      } else if (justifyContent.toUpperCase() === 'CENTER') {
        rtn.push(css.justifyContentFlexCenter)
      } else if (justifyContent.toUpperCase() === 'FLEX-END') {
        rtn.push(css.justifyContentFlexFlexEnd)
      } else if (justifyContent.toUpperCase() === 'SPACE-AROUND') {
        rtn.push(css.justifyContentFlexSpaceAround)
      } else if (justifyContent.toUpperCase() === 'SPACE-BETWEEN') {
        rtn.push(css.justifyContentFlexSpaceBetween)
      }
    }

    const alignItems = style.alignItems
    if (alignItems) {
      if (alignItems.toUpperCase() === 'FLEX-START') {
        rtn.push(css.alignItemsFlexStart)
      } else if (alignItems.toUpperCase() === 'CENTER') {
        rtn.push(css.alignItemsFlexCenter)
      } else if (alignItems.toUpperCase() === 'FLEX-END') {
        rtn.push(css.alignItemsFlexFlexEnd)
      }
    }
  }

  return rtn.join(' ')
}

function getClasses({node, style}) {
  const classes = [css.com]

  if (node.runtime._focus) {
    classes.push(css.debugFocus)
  }

  if (style.flex === 1) {
    classes.push(css.flex)
  }

  return classes.join(' ')
}

function getSizeStyle({style}) {
  const sizeStyle: any = {}
  const {width, height} = style

  if (!width) {
    sizeStyle.width = '100%'
  } else if (isNumber(width)) {
    sizeStyle.width = width + 'px'
  } else if (width) {
    sizeStyle.width = width
  }

  if (isNumber(height)) {
    sizeStyle.height = height + 'px'
  } else if (height) {
    sizeStyle.height = height
  }

  return sizeStyle
}

function getMarginStyle({style}) {
  const marginStyle: any = {}

  const {
    width,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom
  } = style

  if (isNumber(marginTop)) {
    // if (marginTop > 0) {
    //   marginStyle.paddingTop = marginTop + 'px'
    // } else {
    //   marginStyle.marginTop = marginTop + 'px'
    // }
    marginStyle.marginTop = marginTop + 'px'
  }
  if (isNumber(marginLeft)) {
    // if (marginLeft > 0) {
    //   marginStyle.paddingLeft = marginLeft + 'px'
    // } else {
    //   marginStyle.marginLeft = marginLeft + 'px'
    // }
    if (typeof width === 'number' || marginLeft < 0) {
      marginStyle.marginLeft = marginLeft + 'px'
    } else {
      marginStyle.paddingLeft = marginLeft + 'px'
    }
  }
  if (isNumber(marginRight)) {
    // if (marginRight > 0) {
    //   marginStyle.paddingRight = marginRight + 'px'
    // } else {
    //   marginStyle.marginRight = marginRight + 'px'
    // }
    if (typeof width === 'number' || marginRight < 0) {
      marginStyle.marginRight = marginRight + 'px'
    } else {
      marginStyle.paddingRight = marginRight + 'px'
    }
  }
  if (isNumber(marginBottom)) {
    // if (marginBottom > 0) {
    //   marginStyle.paddingBottom = marginBottom + 'px'
    // } else {
    //   marginStyle.marginBottom = marginBottom + 'px'
    // }
    marginStyle.marginBottom = marginBottom + 'px'
  }


  return marginStyle

  return {
    marginTop: marginTop + 'px',
    marginLeft: marginLeft + 'px',
    marginRight: marginRight + 'px',
    marginBottom: marginBottom + 'px'
  }
}

function isNumber(num: any) {
  return typeof num === 'number' && !isNaN(num)
}