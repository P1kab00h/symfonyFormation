function BodyComponent() {
    return <>
        <HeaderComponent/>

        <MainComponent test="Ceci est un test" className='container'>

            Mon bolo bolo, qui me permet de tester le children ==>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque beatae dignissimos dolore
                dolorum harum
                hic, labore laboriosam nesciunt nostrum nulla praesentium quis tempore temporibus ullam vitae voluptate?
                Distinctio,
                laborum!
            </div>
            <div>Ad aut debitis deserunt dolore explicabo inventore iusto, laboriosam quaerat velit vero! Amet
                asperiores expedita
                iusto laboriosam nemo neque repudiandae sed tempore ut. Architecto, dicta doloribus in iusto placeat
                quas.
            </div>
            <div>Aspernatur blanditiis commodi deserunt est fuga, ipsa magnam perferendis sed? Alias animi culpa
                distinctio
                doloribus harum laudantium neque nesciunt nulla praesentium quam quo repellendus, repudiandae soluta, ut
                voluptate
                voluptatem voluptatum.
            </div>

        </MainComponent>

        <FooterComponent>

        </FooterComponent>
    </>

}

function HeaderComponent() {
    return <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img id="logo-main" src="css/My_Monkey_darkBlueII.png" width="150" alt="Logo Thing main logo"/>

                <a className="navbar-brand" href="/user">Amazing navBar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mesFonctionsCoule">Super fonctions Coule</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Des trucs variés
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/marques">Marques</a>
                                <a className="dropdown-item" href="/voiture">Voitures</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/sujet">QCM</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/react">First</a>
                                <a className="dropdown-item" href="/component">Page test component</a>
                            </div>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
}

function MainComponent({test, children}) {

    return <>
        <main>
            <h2>{test}</h2>

            <div>{children}</div>
        </main>
    </>
}

function FooterComponent() {

    return <>
        <footer>


            <div className="container text-center">
                <small>Copyleft &copy; Your Website</small>
            </div>


        </footer>
    </>
}

ReactDOM.render(<BodyComponent/>, document.getElementById('compo'))
ReactDOM.render(<BodyComponent/>, document.getElementsByTagName('body')[0])