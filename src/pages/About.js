

function AboutPage() {
    return (
        <div className='about-container'>
            <div className='about-image-wrapper'>
                <img className='about-image' src={require('../assets/images/space.png')} alt='' />
            </div>
            <div className="about-description-wrapper">
                <h2>Homer J. Simpson</h2>
                <p>Some stuff to tell about Homer. Maybe like he's known to bowl and is really into Duff. He's worked at a nuclear power plant for a long time, has a wife, three kids, etc etc....</p>
                
                <div className='skills-wrapper'>
                    <h3>My Skills:</h3>
                    <ul>
                        <li>Drinking Beer</li>
                        <li>Raising Pigs</li>
                        <li>Eating Donuts</li>
                        <li>Watching TV</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;