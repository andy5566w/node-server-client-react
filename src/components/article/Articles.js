import Article from './Article'
import classes from './Articles.module.scss'
const articles = [
  {
    id: 1,
    title: 'JavaScript 手寫代碼',
    sub_title:
      '主要收集每一次的js內容，包含手寫js code，美國政府一名高級官員告訴路透社，美國今天（當地時間）將運送250萬劑莫德納疫苗給台灣',
    tag: '前端',
    author: '墨墨',
    create_date: '2020-06-19',
    watch: 2,
    love: 3,
    article_total: 2,
    color: '#2C90FF',
  },
  {
    id: 2,
    title: 'JavaScript 手寫代碼',
    sub_title:
      'JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。',
    tag: '前端',
    author: '墨墨',
    create_date: '2020-06-19',
    watch: 2,
    love: 3,
    article_total: 2,
    color: 'rgb(255, 189, 0)',
  },
  {
    id: 3,
    title: 'JavaScript 手寫代碼',
    sub_title:
      '层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 样式表 语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。',
    tag: '前端',
    author: '墨墨',
    create_date: '2020-06-19',
    watch: 2,
    love: 3,
    article_total: 2,
    color: '#90EE90',
  },
  {
    id: 4,
    title: 'JavaScript 手寫代碼',
    sub_title:
      'HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。',
    tag: '後端',
    author: '墨墨',
    create_date: '2020-06-19',
    watch: 2,
    love: 3,
    article_total: 2,
    color: '#37CED0',
  },
]

const Articles = () => {
  const art = articles.map(
    ({
      title,
      sub_title,
      tag,
      author,
      create_date,
      watch,
      love,
      article_total,
      id,
      color,
    }) => (
      <Article
        key={id}
        sub_title={sub_title}
        title={title}
        tag={tag}
        author={author}
        create_date={create_date}
        watch={watch}
        love={love}
        article_total={article_total}
        color={color}
      />
    )
  )
  return <section className={classes.Articles}>{art}</section>
}

export default Articles
