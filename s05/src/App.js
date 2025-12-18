import Presentation from "./components/Presentation";
import PresentationClass from "./components/PresentationClass";

export default function App(){
    const stagiaire = {
        groupe : "dev201",
        centre : "cfpm",
        nom : "john",
        prenom : "doe"
    }
    const diplomes = ["html","css","js","react"]
    return (
        <div>
            {/* <Presentation groupe="dev201" centre="cfpm">test</Presentation>  */}
            {/* <Presentation groupe="dev202" centre="cfpm" nom="john" prenom="doe"/>  */}
            <Presentation stagiaire={stagiaire} diplomes={diplomes} />
            {/* <Presentation groupe="dev201" centre="istag"/> */} 
            <hr/>
            <PresentationClass groupe="dev201" centre="cfpm">
                <span>test2</span>
            </PresentationClass>
            <PresentationClass groupe="dev202" centre="istasm"/>
        </div>
    )
    
}

//export default App;



