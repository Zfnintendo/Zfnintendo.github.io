import ModelViewer from './ModelViewer';

function SkillSet() {
    return (
        <div className="h-96 w-96">
            <ModelViewer url="/models/python-logo.glb" scale={1}/>
        </div>
    );
}

export default SkillSet;