import React from 'react'

export default function About(props) {

    // const [BtnText, setBtnText] = useState("Dark Mode")

    // const [myStyle, setmyStyle] = useState({
    //     color: '#1f1d2b',
    //     backgroundColor: 'white',
    //     //#1f1d2b
    //     border: '2px solid lightgrey'
    // })

    let myStyle={
        color: props.mode=='dark'?'white':'black',
        backgroundColor: props.mode=='dark'?'black':'white',
        border: 2, 
        borderStyle: 'solid', 
        borderColor: props.mode=='dark'?'white': 'lightgrey'
    }
    
    // const toggleMode = () => {
    //     if(myStyle.color === '#1f1d2b'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: '#1f1d2b',
    //             border: '2px solid white'
    //         })
    //         setBtnText("Light Mode");
    //     }
    //     else{
    //         setmyStyle({
    //             color: '#1f1d2b',
    //             backgroundColor: 'white',
    //             border: '2px solid lightgrey'
    //         })
    //         setBtnText("Dark Mode");
    //     }
    // }

    return (
        <>
            <div className="container px-5 py-5" style={myStyle}>
                <h1 className="mx-2">About Us</h1>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                About The Website
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={myStyle}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum necessitatibus minima architecto quidem ipsa optio dolorem autem illum unde, vitae minus a! Eligendi pariatur voluptate ipsa consequatur! Rerum autem vitae illum nam eos dolore aspernatur numquam expedita necessitatibus obcaecati a ea alias sequi fuga architecto et ducimus minima, esse aliquid voluptas ex tempora consequuntur sunt! Dolore, facere. Culpa, tempore illo dignissimos voluptatem necessitatibus, quidem itaque deleniti nostrum iure pariatur perferendis ipsa sint consequatur rem ipsam inventore veritatis voluptatibus omnis numquam esse sed maxime totam. Porro, molestias reprehenderit corporis, harum nesciunt illo cupiditate non quam rem natus consequuntur illum. Neque, sequi?
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                About The Creator
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body"  style={myStyle}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate. Quo nisi, mollitia, modi magni laudantium quam voluptatem libero tempora eaque doloribus quia sequi corporis velit nemo, nam recusandae. Quisquam distinctio ducimus earum! Corporis molestias veritatis eaque! At sed rem veniam doloribus corporis. Voluptates quos quas esse debitis, assumenda repellat totam nihil atque illo a ex alias facilis quasi laudantium. Vel saepe temporibus laudantium sed, officiis error placeat aperiam voluptatum? Vel eum quasi non animi! Sed vel quasi tempora ratione?
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                About Our Team
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={myStyle}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ex assumenda deserunt consequuntur porro cupiditate voluptatem quo eaque voluptatum fugit sequi et, dicta, laudantium consectetur! Corrupti ipsam quibusdam, ducimus fugit accusamus modi mollitia unde sed, nihil pariatur dolorum quam tenetur neque dicta voluptatem? Eos, obcaecati recusandae? Error at officiis facilis sit tempore aperiam eos molestias est, rem, praesentium soluta quis? Perferendis doloremque quaerat autem aliquam maiores ipsum ipsam totam rem vero quidem. Iste at dolorum animi dolor obcaecati qui asperiores similique perspiciatis provident voluptatibus autem itaque aut, ipsum voluptas. Totam.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="button mx-2 my-5">
                    <button className="btn btn-dark px-4 py-2" onClick={toggleMode} style={myStyle}>{BtnText}</button>
                </div> */}
            </div>
        </>
    )
}
