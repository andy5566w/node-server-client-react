import classes from './ArticleContent.module.scss'
import CodeEditor from '../code/CodeEditor'

export const types = {
  code: 'CODE',
  paragraph: 'PARAGRAPH',
  header3: 'HEADER3',
  unorderedList: 'unorderedList',
  orderedList: 'orderedList',
}

const test_data = [
  {
    id: Math.random().toString(16).slice(2),
    type: types.header3,
    value: '以下為Code',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.code,
    value: `const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = function override(config, env) {
  config.plugins.push(new MonacoWebpackPlugin({
    languages: ['json']
  }));
  return config;
}`,
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.header3,
    value: '发布-订阅模型设计思路',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.paragraph,
    value: '发布订阅模型有两个关键点：事件的监听（订阅）、事件的触发（发布）。',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.paragraph,
    value:
      '中央流行疫情指揮中心今天表示，政府自購的莫德納疫苗與美國捐贈250萬劑疫苗的容量不同，每瓶分別為10人與14人份，為避免混淆，6月30日將先配發美國贈送的莫德納疫苗，供7月1日開打。至於政府自購的24萬劑莫德納疫苗，指揮中心發言人莊人祥說，完成檢驗封緘後將先保留。',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.paragraph,
    value:
      '政府採購505萬劑莫德納（Moderna）疫苗，目前已陸續到貨15萬與24萬劑，其中24萬劑莫德納疫苗今天完成食藥署檢驗審查程序，今天傍晚將到倉儲進行封緘，完畢即可放行。另美國捐贈250萬劑莫德納疫苗，預計28日完成檢驗封緘。',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.paragraph,
    value:
      '中央流行疫情指揮中心發言人莊人祥今天接受媒體電話聯訪表示，因政府採購的莫德納疫苗為每瓶至少10人份，而美國捐贈的莫德納疫苗則為每瓶至少14人份，為避免接種單位混淆，30日將先配美國贈送疫苗，7月1日送抵即可開打，且疫苗數量較多，能及早讓更多人施打。',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.paragraph,
    value:
      '台灣向國外爭取新冠肺炎疫苗陸續抵台，先後有日本捐贈124萬劑AZ疫苗、美國捐贈250萬劑莫德納疫苗，接下來政府採購莫德納疫苗還會到貨，中央流行疫情指揮中心決定擴大接種，將公費疫苗1至7類接種對象擴大到10類。最新新冠肺炎疫苗接種名單，將所有孕婦比照75歲以上長者成為第6類接種對象，原訂該類孕婦僅能選擇AZ疫苗，但指揮中心今天再加碼開放第6類孕婦施打莫德納疫苗，預估18萬人受惠。',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.paragraph,
    value:
      '衛福部疾病管制署「傳染病防治諮詢會預防接種組」（ACIP）在最新擴大新冠肺炎疫苗接種名單中，決定將18萬名孕婦納入優先接種對象，與75歲以上長者同列於第6類對象。指揮中心發言人莊人祥昨天強調，莫德納疫苗開放至第3類、AZ疫苗開放至第7類對象，若孕婦兼具第1至3類身分，疫苗就可以二擇一。但高雄市市長陳其邁昨天在新冠肺炎疫情應變會議會後記者會宣布，擬最快自23日起讓1到5類孕婦接種莫德納疫苗；對此，莊人祥昨天第一時間回應，一般身分孕婦僅能選擇打AZ疫苗或暫時不打，甚至今天上午全國防疫會議會後記者會，副指揮官陳宗彥重申孕婦只能打AZ疫苗。',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.header3,
    value: '測試無序',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.unorderedList,
    value: [
      'on(): 负责注册事件的监听器，指定事件触发时的回调函数',
      'emit(): 负责触发事件，可通过传参使其在触发的时候携带数据',
      'off(): 负责监听器的移除。',
    ],
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.header3,
    value: '測試有序',
  },
  {
    id: Math.random().toString(16).slice(2),
    type: types.orderedList,
    value: [
      'on(): 负责注册事件的监听器，指定事件触发时的回调函数',
      'emit(): 负责触发事件，可通过传参使其在触发的时候携带数据',
      'off(): 负责监听器的移除。',
    ],
  },
]

const ArticleContent = ({ data, dispatch }) => {
  const handleCloseContent = (e) => {
    if (
      e.target.classList.contains(classes.ArticleContent) ||
      e.target.classList.contains(classes.closeBtn)
    )
      dispatch({ type: 'CLOSE_ARTICLE_CONTENT' })
  }
  // const id = data.id
  const content = test_data.map(({ type, value, id }) => {
    switch (type) {
      case types.code:
        return <CodeEditor key={id} code={value} readOnly={true} />
      case types.paragraph:
        return <p key={id}>{value}</p>
      case types.header3:
        return <h3 key={id}>{value}</h3>
      case types.unorderedList:
        return (
          <ul key={id}>
            {value.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        )
      case types.orderedList:
        return (
          <ol key={id}>
            {value.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ol>
        )
      default:
        return ''
    }
  })
  return (
    <div className={classes.ArticleContent} onClick={handleCloseContent}>
      <div className={classes.ArticleContent__content}>
        <span className={classes.closeBtn}>&#215;</span>
        <h1>header</h1>
        <div className="container mx-auto d-flex flex-col">{content}</div>
      </div>
    </div>
  )
}

export default ArticleContent
