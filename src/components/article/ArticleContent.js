import classes from './ArticleContent.module.scss'

const ArticleContent = ({ data, dispatch }) => {
  const handleCloseContent = (e) => {
    if (e.target.classList.contains(classes.ArticleContent))
      dispatch({ type: 'CLOSE_ARTICLE_CONTENT' })
  }
  return (
    <div className={classes.ArticleContent} onClick={handleCloseContent}>
      <div className={classes.ArticleContent__content}>
        <div className="container mx-auto">
          <h1> id:{data.id}</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias in
            ipsum minima neque officia perferendis quod reprehenderit sed
            tempora veniam. Adipisci assumenda corporis dignissimos, ducimus
            error excepturi nam nobis odio quo repellendus! Animi aperiam
            distinctio excepturi nihil sunt! Aliquid corporis delectus nemo non
            optio quas reprehenderit saepe vitae. Ab aspernatur deleniti eos
            maxime natus nobis provident quia velit? Alias distinctio impedit
            inventore iure quia, quidem recusandae. Cumque maiores, quas.
            Adipisci animi aperiam beatae culpa dignissimos eaque eum fugit,
            harum illum itaque laudantium magni minima molestias nemo nisi nobis
            obcaecati omnis optio porro possimus quam repellendus reprehenderit
            saepe similique vitae! Amet beatae cupiditate dignissimos error
            excepturi incidunt libero perferendis quidem sunt voluptatum.
            Adipisci beatae consequatur delectus dicta eius enim facere fuga in
            quaerat quos ratione rem tenetur, voluptatum. Ad amet atque cum
            doloribus fugit, illum labore minima odit perspiciatis praesentium
            quidem quisquam reiciendis sequi sit voluptatem? Dolore eos harum,
            incidunt molestiae nisi non, nulla odit officiis ratione rerum sunt
            voluptatem? Accusamus alias atque doloribus est eveniet inventore
            itaque, nisi nostrum praesentium, quasi qui, quibusdam voluptatibus
            voluptatum. Accusantium amet aut blanditiis deserunt dignissimos
            dolore dolores eaque magnam maxime nam natus nisi quis repellat,
            rerum suscipit veritatis voluptatibus. Ipsam provident quisquam
            tempore. Ad amet architecto beatae blanditiis consequatur corporis
            cumque deleniti dolore dolores ducimus earum eius error, iste magni,
            minus modi molestias nihil non nulla placeat porro quasi quia quos
            ratione, recusandae reiciendis repudiandae saepe temporibus
            voluptates voluptatum? Accusamus ad commodi consectetur dicta
            distinctio error facere, iure omnis, quasi ratione tenetur, totam
            voluptates. Adipisci aut commodi cupiditate eveniet expedita illo
            laborum maxime molestiae nesciunt obcaecati, pariatur possimus qui,
            suscipit totam unde, velit voluptatem! Blanditiis fugit id illo
            possimus ut. A assumenda cupiditate eaque ipsa, iure quas. Accusamus
            accusantium alias commodi debitis distinctio doloribus ea eligendi
            eos esse et eveniet, harum iste laboriosam laborum minus mollitia
            natus necessitatibus nesciunt nihil nisi nobis obcaecati officiis
            quam quasi quisquam sed sequi suscipit totam veritatis, vitae.
            Adipisci beatae cum, delectus dolor doloribus eius et ex illum
            maxime molestias necessitatibus nisi odio sit soluta, tempora.
            Aliquam beatae blanditiis dignissimos doloribus eaque est illo
            incidunt libero magnam maxime molestiae mollitia nobis perferendis
            quisquam, quo repellat saepe tenetur unde vitae voluptates.
            Asperiores consequatur consequuntur dicta eum id illo illum omnis
            perspiciatis ratione tempore. Adipisci aliquam aperiam ducimus eaque
            eius eligendi, eum excepturi id molestias nihil nostrum quia quidem?
            Ab adipisci consectetur, corporis eius est ipsa laborum laudantium
            minima officia quae quas quia rem repellendus repudiandae sequi
            temporibus ut. A, ad atque autem corporis dolorem dolorum error et
            illum in nulla possimus praesentium, quas quo recusandae sapiente
            vitae voluptate. Alias aliquid amet aperiam asperiores autem, beatae
            debitis distinctio dolores, est eveniet fuga, id illo libero magnam
            molestias repellat vero. Ad aut, cum, cupiditate eveniet ipsum
            itaque modi natus neque obcaecati quae, repudiandae ut? Earum,
            porro, voluptate! Assumenda ducimus et quam vero! Ad adipisci
            aperiam asperiores atque deserunt dignissimos fugiat illum, iste
            libero maxime molestias nesciunt nulla perspiciatis quas rem
            repellat veniam vero. Aperiam ea ex fugiat molestias, perspiciatis
            quis sit! In!
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium alias aut commodi deleniti dolores eligendi enim eos
            excepturi expedita laudantium libero mollitia nam nesciunt nobis
            nulla optio quas quos repudiandae, rerum sapiente sed sequi tempore
            vel veniam vero voluptate voluptatibus! A adipisci aut deserunt
            dolor dolorem ea eligendi eos est ex ipsa iste magni molestias
            mollitia nam non nostrum nulla perspiciatis quia, quibusdam quod
            ratione reiciendis soluta voluptas. Accusamus alias animi architecto
            aspernatur consectetur ea enim esse harum itaque minima nam, nihil,
            nobis officia porro provident repellat repellendus reprehenderit
            saepe, veritatis voluptatum? Accusantium amet autem debitis dolor
            error facere iusto provident reiciendis voluptate? Deserunt eveniet
            incidunt ipsam iste laboriosam quae quam rerum vel! Ab aperiam
            asperiores atque autem delectus distinctio eligendi eum explicabo
            facilis, illum ipsa ipsum iste iusto magni modi natus nesciunt quod
            rem repellat reprehenderit sed, totam voluptatem voluptates. A
            accusantium aperiam assumenda aut consequuntur cupiditate deleniti
            ducimus esse est ipsa, ipsam itaque laborum laudantium magni maiores
            nemo neque nisi omnis porro provident quae qui tempora tempore
            temporibus ullam. Cum enim harum ipsam quam qui soluta tempore!
            Accusamus accusantium ad aliquam aliquid animi aperiam aut beatae
            corporis distinctio ea exercitationem facere fugit hic iusto laborum
            mollitia natus neque nihil non, nostrum obcaecati porro possimus quo
            quos reiciendis repellat repudiandae sunt ullam vel voluptatum. A ad
            architecto assumenda consectetur consequuntur cumque dolore dolorum
            eos est eveniet explicabo fuga fugit harum in ipsa ipsam iste
            laudantium possimus provident quaerat quasi qui quia ratione, rerum
            saepe sapiente sequi sunt, temporibus vitae voluptates? Aspernatur
            corporis debitis et eum fuga hic iusto molestiae nisi quam quidem
            ratione reiciendis repellendus soluta, temporibus totam. Accusantium
            architecto debitis ex exercitationem, expedita fuga illum inventore
            iste magnam minus nesciunt nisi, nobis nostrum odit officia optio
            perferendis porro provident temporibus voluptates? Aut dolorum
            fugiat libero. Accusamus adipisci beatae cupiditate ea error
            excepturi exercitationem expedita impedit in incidunt laboriosam
            laudantium molestias nemo nisi obcaecati, odio officiis pariatur
            quam qui saepe sit totam vitae voluptatibus. Ad, animi sed. Error
            ipsa itaque laudantium nam nemo odio, quia! Aut debitis in minima
            necessitatibus nemo neque nisi possimus quam sapiente, soluta.
            Architecto autem commodi cum cupiditate deserunt dicta eius eos,
            excepturi expedita illum ipsum, iste labore magni non odit officia
            praesentium quibusdam quos sequi suscipit tempora vitae voluptatum.
            Ab assumenda atque beatae consectetur culpa cum, dicta dolores
            eligendi est facere fugiat fugit hic incidunt ipsa iusto libero
            neque ratione repudiandae sunt temporibus totam veniam voluptatibus.
            Earum enim eos eum illo inventore iste, laudantium minima nam non
            quod quos reprehenderit sed, sit soluta suscipit ut voluptatibus?
            Accusamus beatae culpa cum dolores esse est et iusto laudantium
            nesciunt nihil, quibusdam, recusandae repellat saepe sint tempore
            tenetur veniam voluptate voluptatibus! A consequuntur deleniti
            ducimus, error in incidunt, labore modi perferendis placeat quo
            ratione reprehenderit tempore voluptatem? Accusantium aliquid
            aperiam, asperiores autem corporis cupiditate doloremque excepturi
            iste laudantium provident quae quaerat quam quasi qui sunt vel
            voluptates. Blanditiis cum labore laudantium nemo, placeat porro
            voluptate. Alias ducimus est eveniet explicabo iure labore
            necessitatibus perspiciatis possimus ratione soluta! Architecto at
            consequatur delectus deleniti dolorem dolores, ducimus eligendi
            impedit in incidunt inventore iure iusto labore laborum magnam magni
            necessitatibus omnis optio perferendis quas, quidem quod, quos
            repellat. Ab accusantium ad adipisci animi aperiam assumenda at
            atque beatae consequuntur distinctio dolor dolore, doloribus fuga
            illo impedit ipsam itaque labore, minima mollitia nam nemo neque
            nobis officiis omnis quam qui quia quis quod reiciendis sed
            similique soluta vel velit veniam voluptas voluptates, voluptatibus.
            Ad architecto asperiores consectetur consequatur cum deleniti dolor,
            doloribus earum eius et excepturi harum itaque magnam magni minus
            molestias nesciunt nihil nostrum nulla, officia porro provident quod
            repellendus saepe sed, sequi sint suscipit tempore totam unde
            veritatis vero vitae voluptate! Aut blanditiis cum distinctio
            inventore repellat unde velit vero. Alias beatae deleniti deserunt
            inventore maxime nisi sunt? Alias consequuntur deleniti ea ex
            excepturi laudantium porro reprehenderit ullam voluptates
            voluptatum! Accusamus, accusantium autem blanditiis dolor dolore
            dolores, eligendi hic in nisi, omnis soluta tenetur vel vero
            voluptas voluptatem! Asperiores consequuntur distinctio explicabo
            fuga inventore, ipsa modi nihil nisi officia, porro qui quia
            reiciendis rerum ut voluptates. Atque cum ducimus earum esse eum
            eveniet harum impedit, ipsam, ipsum iure laborum minus nam nemo
            neque non optio, quo quos tempora veniam voluptates? Ab aspernatur
            autem consequuntur ea eum explicabo inventore, ipsa iusto minima
            molestiae omnis quibusdam quis repellat totam velit vero voluptas?
            Consequuntur cupiditate tempore vel velit! Deserunt eaque harum
            laborum minus natus quasi ratione recusandae reiciendis rerum
            voluptatem? Cumque, odio, veniam. A alias at atque consectetur
            debitis dicta dolores dolorum enim, et illo laboriosam maxime
            nesciunt non nulla officia perferendis placeat praesentium quas
            quidem similique suscipit, tempore veniam. At autem consectetur illo
            illum incidunt ipsam, labore nisi quibusdam reprehenderit
            repudiandae. Dolor iusto perspiciatis vero? Alias asperiores at
            dolorem ex explicabo illum molestiae praesentium, quos. Consequuntur
            deleniti doloribus ducimus, eius enim esse eum labore magni odit
            perferendis quidem quis quisquam quo repudiandae sunt! Alias debitis
            fugit, incidunt ipsa ipsum itaque minima, obcaecati officia
            pariatur, quasi quos recusandae repellat similique sit vero!
            Accusamus, alias animi aut delectus, dicta dignissimos dolore
            dolores et eveniet exercitationem hic inventore ipsum iste maiores
            nisi nulla numquam pariatur quibusdam quidem quisquam ratione sint
            tempore tenetur voluptate voluptatem. A adipisci at cupiditate ipsa
            neque odio, tempore. Aliquid animi corporis delectus doloremque illo
            maxime perspiciatis ut voluptate? Adipisci, cum et fugit incidunt
            iste laudantium libero molestiae odio optio perferendis praesentium
            quam quidem quis quo sapiente tempora tenetur velit veniam vero
            voluptates. Cumque deserunt, eos et incidunt laudantium natus odit
            provident recusandae reiciendis sequi! Alias assumenda autem commodi
            consequuntur cumque dolores doloribus ea eius expedita hic ipsa,
            itaque, mollitia officia, perferendis placeat provident quasi quia
            quibusdam quis quisquam quos rem reprehenderit rerum similique
            suscipit tempora velit! Amet animi architecto aspernatur aut beatae
            culpa cum delectus distinctio error expedita facilis id illum in
            ipsa maxime minima modi natus necessitatibus nemo neque, numquam
            optio provident reprehenderit sed tenetur vel velit vero. Aliquam
            aliquid aut consequatur, dolorum eaque earum illo ut velit. Delectus
            dolorem est expedita hic ipsum, libero obcaecati repudiandae
            voluptatem! Eum!
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            consequuntur corporis cupiditate doloremque eius excepturi, itaque
            modi praesentium, quam recusandae sapiente sed similique, sunt
            suscipit ut. Beatae commodi consequatur doloribus in incidunt magnam
            magni quas, qui rerum veniam. Architecto culpa ex odit ratione,
            reprehenderit soluta veritatis. At aut autem culpa deleniti
            deserunt, dignissimos dolorem ea fugiat harum impedit inventore
            itaque labore laborum magnam obcaecati omnis placeat porro possimus
            praesentium quasi quisquam quo quos repellat repellendus sequi ut
            voluptate. Aperiam, deserunt maiores non provident sunt suscipit
            voluptas! Accusantium aperiam beatae culpa cumque debitis deserunt
            dolores dolorum enim est facilis laborum magni modi mollitia nam
            nesciunt nulla perferendis, provident qui recusandae sit tempore
            ullam veniam voluptates! Ab aliquam aut cupiditate dolorem doloribus
            enim ex inventore nam non, nulla provident reiciendis! Beatae
            consequatur corporis deserunt dolores ducimus harum, labore, maxime
            neque nisi nobis numquam omnis pariatur, placeat quam quod
            repudiandae suscipit tempora tenetur? A ad aspernatur, atque aut
            dignissimos dolorum, earum eum exercitationem facilis magni neque
            nesciunt quibusdam quis, sit suscipit tempora velit. A accusamus,
            adipisci alias aperiam, culpa ducimus enim esse exercitationem
            facilis fugit iure nisi officia officiis optio praesentium
            quibusdam, quis reprehenderit vitae voluptatem voluptatum.
            Accusantium asperiores aut, consequatur dicta distinctio dolore
            dolorem ducimus earum eius eligendi esse excepturi explicabo fugiat
            hic id illo illum impedit iure iusto magnam maiores maxime modi,
            molestiae neque nisi nostrum nulla obcaecati odio officia
            perspiciatis provident quae quas quisquam sunt tenetur ullam vero!
            Ab asperiores cum cupiditate ex excepturi exercitationem expedita
            facere illum, labore molestias natus necessitatibus nesciunt nihil
            omnis quidem ratione rem soluta tenetur vitae voluptate voluptatem
            voluptates voluptatibus! Alias aperiam consequatur consequuntur
            corporis debitis deleniti deserunt dolor doloremque exercitationem
            explicabo fugit, iste labore laboriosam, libero magnam minima, odit
            quasi ratione saepe sed sequi soluta temporibus voluptas! Atque
            deserunt dicta, eum exercitationem facere id ipsa, iste laudantium,
            neque perspiciatis qui quo similique suscipit temporibus vitae?
            Adipisci animi atque consectetur cupiditate delectus dignissimos
            doloremque, eaque, est et facilis fuga illo, inventore laborum
            libero maiores mollitia obcaecati odit porro quaerat quia quod
            recusandae sunt veniam! A animi aspernatur, consequatur delectus
            excepturi iusto molestias, neque omnis placeat, quam quos
            temporibus. Accusamus corporis debitis, dolorem doloribus earum,
            explicabo facere inventore ipsa libero magnam nam nesciunt officiis
            quidem quis sed similique temporibus, ullam voluptatibus? Amet
            commodi eaque, eos error est fugiat illum in iure maxime optio porro
            provident quasi quia quis quod ratione rem rerum voluptates? Amet
            hic inventore ipsam perferendis unde. Accusantium ad, aperiam beatae
            consequatur consequuntur debitis et facere fuga, molestias, omnis
            porro quaerat quas quia! A accusantium, blanditiis, dicta doloremque
            ea eius error esse est facere facilis fugiat fugit illo inventore
            iure nam nihil obcaecati perspiciatis, quia sit tempora tenetur
            ullam vel voluptate. Explicabo, mollitia, vel. A architecto dolorem
            doloribus ducimus ea earum eligendi fuga laboriosam, magnam maxime,
            natus necessitatibus non obcaecati porro provident quis reiciendis
            repellendus sed sint sit ut veniam voluptas voluptate! Aperiam
            deleniti magni omnis quidem quod totam voluptas! Corporis culpa
            cupiditate eligendi facilis magni optio quo recusandae vitae
            voluptatum! Exercitationem illum ipsa ipsam minus, nostrum obcaecati
            perferendis quasi quis ratione reprehenderit, rerum saepe sapiente.
            Aliquid aut harum molestias non nulla. A alias eligendi labore
            magnam veritatis. Aperiam delectus doloremque dolores est eveniet
            fugiat id impedit iusto laudantium magni nam necessitatibus nemo,
            porro, quasi qui similique sunt temporibus unde, ut voluptatibus!
            Aliquid architecto culpa earum error eum expedita labore laborum
            possimus provident veritatis. A accusamus animi aperiam asperiores
            assumenda beatae doloribus ducimus eaque earum eos error ipsum iste
            magnam maxime nisi nobis odio odit porro praesentium provident quis
            repellendus repudiandae sed sint tempore temporibus, veritatis. A
            accusantium animi architecto consequatur corporis culpa cupiditate
            distinctio dolorem dolores ducimus eius eos exercitationem iste,
            labore magnam maxime nesciunt non odio officia officiis placeat
            possimus praesentium provident quam quidem quod, quos ratione
            reiciendis sapiente sit. Ab animi aspernatur assumenda blanditiis
            consequatur corporis, dolor dolore dolorem dolores enim fuga id ipsa
            nam neque non obcaecati odio pariatur, quasi quia reiciendis sit
            tempore, unde velit. Accusantium corporis, fugiat ipsam officiis
            pariatur quidem quos ratione reiciendis sit vitae! Ab doloribus ea
            enim esse eveniet hic incidunt, laboriosam modi nisi perspiciatis
            quos reiciendis repudiandae velit veniam vitae! A adipisci aperiam
            at autem distinctio doloremque eius enim, excepturi fuga neque
            possimus qui quidem, rem repellat sit tempora voluptas voluptates,
            voluptatum? Ab accusantium ad alias aperiam beatae delectus
            distinctio dolor doloremque ea esse est exercitationem explicabo
            fuga, fugiat illo laborum libero maiores modi molestiae nam natus
            nisi nostrum numquam odio pariatur perspiciatis quasi quia repellat,
            repellendus repudiandae unde velit vitae voluptas! A amet deleniti
            dolorum eaque et facilis harum illum libero maxime nulla perferendis
            placeat ratione rem reprehenderit sapiente similique soluta suscipit
            temporibus ullam, velit vitae voluptatem voluptatum. A accusamus ad,
            asperiores beatae commodi consequatur debitis dolore dolores eum
            exercitationem facilis fuga illum ipsam laboriosam laborum minima,
            mollitia natus numquam placeat quam reiciendis vero voluptatem
            voluptatibus? Accusamus architecto blanditiis commodi consequuntur
            dolorum et eveniet ex excepturi facilis, fuga fugiat fugit hic
            inventore nam nobis officiis omnis optio placeat porro quo repellat
            repellendus reprehenderit sint sit voluptatem? Consequuntur dolor
            expedita explicabo facere fugit, hic illo, odio perferendis placeat
            quis rem rerum sunt ut! Dicta dolor doloremque eaque, earum eos eum
            impedit, in ipsam iste, minima neque nobis non optio perspiciatis
            quia rerum veniam voluptatibus voluptatum. Accusamus accusantium
            aperiam architecto assumenda autem debitis dignissimos doloribus
            esse ex facere fugiat harum id illum impedit iste labore laborum
            nisi non officia officiis, optio perferendis porro possimus quam
            quasi quos reiciendis rem sapiente similique sit veniam veritatis
            vero voluptas? Doloribus excepturi exercitationem illo saepe unde!
            Aliquid, amet dolore ducimus excepturi fuga fugiat laboriosam
            laudantium mollitia nisi nostrum numquam possimus quibusdam quidem,
            recusandae, reiciendis rem veritatis. Corporis delectus hic ipsam
            magni obcaecati placeat quas. Animi at consectetur deserunt dolorem
            earum enim et excepturi exercitationem harum illum in ipsa minus
            mollitia neque nesciunt numquam officia perferendis, placeat porro
            provident qui quia recusandae saepe sapiente tempora unde vel.
            Asperiores dolorum ea eum expedita hic in inventore, molestiae
            necessitatibus non, officia, provident quaerat quasi quo rem
            repellat? Cum ducimus nisi voluptas voluptatem!
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleContent
