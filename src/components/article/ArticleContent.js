import classes from './ArticleContent.module.scss'
import CodeEditor from '../code/CodeEditor'

const test_data = [
  {
    id: '1',
    type: 'code',
    value: `const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = function override(config, env) {
  config.plugins.push(new MonacoWebpackPlugin({
    languages: ['json']
  }));
  return config;
}`,
  },
  {
    id: '2',
    type: 'paragraph',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dolorem fuga fugiat, illo illum impedit iste, mollitia nam neque placeat praesentium quisquam quo sunt veniam vitae voluptate. Consectetur ex exercitationem laudantium repudiandae sit. Error esse fugiat illum ipsa optio temporibus, tenetur veniam? Delectus, explicabo porro! Autem molestias optio porro quas velit. Commodi consequatur distinctio, dolore doloribus ea eaque eos illo, magni quas sed totam ullam voluptatum? Aperiam assumenda blanditiis dicta et id, illum inventore iste iure iusto minima minus molestiae necessitatibus numquam placeat quas recusandae sint temporibus totam ullam voluptas? Accusantium culpa illum incidunt perferendis, rerum temporibus tenetur voluptatum! Accusamus adipisci beatae cum ea eius eveniet facere hic incidunt, minima modi neque non placeat provident quo soluta ut veritatis? Ab adipisci aliquid consectetur consequatur doloremque dolorum id, incidunt iste molestiae perferendis praesentium quidem sint soluta! Aut autem deleniti laboriosam, praesentium quidem repudiandae saepe voluptate! A accusamus accusantium animi aperiam deserunt dolor ea eum eveniet facere facilis fuga, hic illum iste laborum magnam maxime modi nam natus nemo nisi nobis obcaecati, odio pariatur perferendis quam qui quis quod recusandae sapiente sed sequi sint sunt tenetur veritatis voluptatem voluptatibus voluptatum. Blanditiis culpa, deleniti deserunt dicta eveniet minus pariatur similique sit ut voluptates. Ab, harum odit praesentium repellendus sapiente veritatis voluptatum. Ab accusantium ad adipisci aliquam aspernatur, assumenda autem, debitis deserunt dolore ducimus ea earum error eum explicabo fuga incidunt maiores maxime natus nemo nihil non nostrum nulla numquam odio odit officia officiis placeat porro quibusdam quos recusandae rem sint soluta tempore ullam ut voluptatem! Ad blanditiis cupiditate delectus dignissimos distinctio doloribus eveniet facere inventore iste, nemo nisi odit officiis quibusdam quod sed sunt tempore vel voluptas? Accusantium, consequatur dolor eaque eos, et eveniet impedit labore minima nam nobis perferendis praesentium quae repellendus? Eligendi eos maiores molestiae repudiandae similique? A cupiditate deserunt est iusto minus obcaecati quasi? Accusantium consectetur culpa cumque enim error excepturi fugit itaque, laboriosam magni maiores, modi nesciunt nihil nulla numquam quaerat quod reprehenderit sapiente. Adipisci eius excepturi fugiat incidunt laborum laudantium magnam, nam omnis perspiciatis quam quasi quis quos rem similique, suscipit unde voluptas voluptatum. Adipisci aliquam architecto aut consequuntur cupiditate deserunt doloremque dolores eum exercitationem hic, ipsa iste laborum laudantium magni, mollitia nam necessitatibus neque nesciunt nisi nostrum obcaecati pariatur provident quam quidem quis quisquam repellendus rerum sed sequi similique, soluta tempore tenetur ullam ut velit veritatis voluptas. Ad autem beatae consequuntur cupiditate, eaque expedita explicabo, in incidunt laudantium molestiae natus nostrum obcaecati omnis quam qui quis quisquam ratione repellendus repudiandae sed tenetur ullam, ut voluptates! Ab aperiam commodi cum dolor ea enim esse explicabo fugiat in libero mollitia natus necessitatibus, nihil nisi optio perferendis provident quasi quia quisquam quo quos reiciendis repudiandae rerum soluta unde veritatis voluptas voluptatum. Autem, consectetur culpa cum delectus expedita libero officia, omnis pariatur, quisquam sapiente soluta ullam! Accusantium aliquid beatae commodi consequuntur culpa delectus dolorem, eligendi ex, fugiat hic id impedit in incidunt iste modi molestiae mollitia natus nulla numquam praesentium quae quisquam, ratione reprehenderit sequi tempore vel veniam veritatis! Amet!',
  },
  {
    id: '3',
    type: 'paragraph',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dolorem fuga fugiat, illo illum impedit iste, mollitia nam neque placeat praesentium quisquam quo sunt veniam vitae voluptate. Consectetur ex exercitationem laudantium repudiandae sit. Error esse fugiat illum ipsa optio temporibus, tenetur veniam? Delectus, explicabo porro! Autem molestias optio porro quas velit. Commodi consequatur distinctio, dolore doloribus ea eaque eos illo, magni quas sed totam ullam voluptatum? Aperiam assumenda blanditiis dicta et id, illum inventore iste iure iusto minima minus molestiae necessitatibus numquam placeat quas recusandae sint temporibus totam ullam voluptas? Accusantium culpa illum incidunt perferendis, rerum temporibus tenetur voluptatum! Accusamus adipisci beatae cum ea eius eveniet facere hic incidunt, minima modi neque non placeat provident quo soluta ut veritatis? Ab adipisci aliquid consectetur consequatur doloremque dolorum id, incidunt iste molestiae perferendis praesentium quidem sint soluta! Aut autem deleniti laboriosam, praesentium quidem repudiandae saepe voluptate! A accusamus accusantium animi aperiam deserunt dolor ea eum eveniet facere facilis fuga, hic illum iste laborum magnam maxime modi nam natus nemo nisi nobis obcaecati, odio pariatur perferendis quam qui quis quod recusandae sapiente sed sequi sint sunt tenetur veritatis voluptatem voluptatibus voluptatum. Blanditiis culpa, deleniti deserunt dicta eveniet minus pariatur similique sit ut voluptates. Ab, harum odit praesentium repellendus sapiente veritatis voluptatum. Ab accusantium ad adipisci aliquam aspernatur, assumenda autem, debitis deserunt dolore ducimus ea earum error eum explicabo fuga incidunt maiores maxime natus nemo nihil non nostrum nulla numquam odio odit officia officiis placeat porro quibusdam quos recusandae rem sint soluta tempore ullam ut voluptatem! Ad blanditiis cupiditate delectus dignissimos distinctio doloribus eveniet facere inventore iste, nemo nisi odit officiis quibusdam quod sed sunt tempore vel voluptas? Accusantium, consequatur dolor eaque eos, et eveniet impedit labore minima nam nobis perferendis praesentium quae repellendus? Eligendi eos maiores molestiae repudiandae similique? A cupiditate deserunt est iusto minus obcaecati quasi? Accusantium consectetur culpa cumque enim error excepturi fugit itaque, laboriosam magni maiores, modi nesciunt nihil nulla numquam quaerat quod reprehenderit sapiente. Adipisci eius excepturi fugiat incidunt laborum laudantium magnam, nam omnis perspiciatis quam quasi quis quos rem similique, suscipit unde voluptas voluptatum. Adipisci aliquam architecto aut consequuntur cupiditate deserunt doloremque dolores eum exercitationem hic, ipsa iste laborum laudantium magni, mollitia nam necessitatibus neque nesciunt nisi nostrum obcaecati pariatur provident quam quidem quis quisquam repellendus rerum sed sequi similique, soluta tempore tenetur ullam ut velit veritatis voluptas. Ad autem beatae consequuntur cupiditate, eaque expedita explicabo, in incidunt laudantium molestiae natus nostrum obcaecati omnis quam qui quis quisquam ratione repellendus repudiandae sed tenetur ullam, ut voluptates! Ab aperiam commodi cum dolor ea enim esse explicabo fugiat in libero mollitia natus necessitatibus, nihil nisi optio perferendis provident quasi quia quisquam quo quos reiciendis repudiandae rerum soluta unde veritatis voluptas voluptatum. Autem, consectetur culpa cum delectus expedita libero officia, omnis pariatur, quisquam sapiente soluta ullam! Accusantium aliquid beatae commodi consequuntur culpa delectus dolorem, eligendi ex, fugiat hic id impedit in incidunt iste modi molestiae mollitia natus nulla numquam praesentium quae quisquam, ratione reprehenderit sequi tempore vel veniam veritatis! Amet!',
  },
  {
    id: '4',
    type: 'paragraph',
    value: 'end',
  },
]

const ArticleContent = ({ data, dispatch }) => {
  const handleCloseContent = (e) => {
    if (e.target.classList.contains(classes.ArticleContent))
      dispatch({ type: 'CLOSE_ARTICLE_CONTENT' })
  }
  // const id = data.id
  const content = test_data.map(({ type, value, id }) => {
    switch (type) {
      case 'code':
        return <CodeEditor key={id} code={value} readOnly={true} />
      case 'paragraph':
        return <p key={id}>{value}</p>
      default:
        return ''
    }
  })
  return (
    <div className={classes.ArticleContent} onClick={handleCloseContent}>
      <div className={classes.ArticleContent__content}>
        <h1>header</h1>
        <div className="container mx-auto d-flex flex-col">{content}</div>
      </div>
    </div>
  )
}

export default ArticleContent
