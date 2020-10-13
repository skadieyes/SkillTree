/**
 * 状态显示
 */
const statusStr = {
  '1': '待付款',
  '2': '待发货',
  '3': '已发货',
  '4': '交易完成',
  '5': '交易关闭',
  'default': ''
}
const getStatus = (status) => { return statusStr[status] || statusStr['default'] }

/**
 * 多个condition对应名称
 */

const actions = {
  'guest_1':()=>{/*do sth*/},
  'guest_2':()=>{/*do sth*/},
  //....
}

const onButtonClick = (identity,status)=>{
  let action = actions[`${identity}_${status}`] || actions['default']
  action()
}

/**
 * 第二个办法
 */

 
const actions = new Map([[{ identity: 'guest', status: 1 }, () => {/*do sth*/ }],
                        [{ identity: 'guest', status: 2 }, () => {/*do sth*/ }],
                        //...
                        ])

const onButtonClick = (identity, status) => {
  let action = [...actions].filter(([key, value]) => (key.identity == identity && key.status == status))
  action.forEach(([key, value]) => value())
}

/**
 * 不同的状态 不同条件
 */
const rules = [{
  match (an, old) { if (an === 1) { return true } },
  action (an, old) {
    if (old === 1) { }         
      else if (old === 2) { }
    }
  }, {
  match (an, old) {
    if (an === 2) {
      return true
    }
  },
  action (an, old) {
    if (old === 1) { }
      else if (old === 2) { }
    }
  },
  {
  match (an, old) {
    if (an === 3) {
      return true
    }
  },
  action (an, old) {
    if (old === 1) { }
      else if (old === 2) { }
    }
  }]
  function init (an, old) {
    for (let i = 0; i < rules.length; i++) {
      // 如果返回true        
      if (rules[i].match(an, old)) { rules[i].action(an, old) }
    }
  }
  init(isAnswer, isOldUser)

  // ramda
 
  /**
   * 根据范围做不同的处理
   */
function showGrace (grace, level, levelForGrace) {
  for (let i = 0; i < level.length; i++){
    if (grace >= level[i]) {
      return levelForGrace[i];
    }
  }
  //如果不存在，那么就是分数很低，返回最后一个
  return levelForGrace[levelForGrace.length - 1];
  }
  let graceForLevel = [700, 650, 600, 550];
  let levelText = ['信用极好', '信用优秀', '信用良好', '信用中等', '信用较差'];