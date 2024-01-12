import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import './BattlePassDetailPage.scss';

function BattlePassDetailPage () {
    const { id } = useParams();

    const [battlepasses, setBattlePasses] = useState(null);

    useEffect(() => {
        (async () => {
            const battlePassResponse = await fetch("http://localhost:3000/api/battlepass/" + id);
            const battlePassResponseData = await battlePassResponse.json();

            setBattlePasses(battlePassResponseData)
        })();
    }, []);

    
    return(
        <div className="bg-img">
        <Header />
        <div className="block">
        {battlepasses ? (
            <>
            <h2 className="title-bpdetails">{battlepasses.data.title}</h2>
            <img className="img-bpdetails" src={battlepasses.data.imageUrl} alt="" />
            <p className="paragraph-bpdetails"  dangerouslySetInnerHTML={{ __html: battlepasses.data.history }}></p>
            </>
        ) : (
            <p>En cours de chargment</p>
        )}

        <input className="btn-comment" type="submit" value="Commenter" />

        </div>
        </div>
    )
}

export default BattlePassDetailPage;