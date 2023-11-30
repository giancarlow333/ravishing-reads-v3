import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import List from '../components/List.jsx';
import Header from '../components/Header';

import { QUERY_LISTS } from '../utils/queries';

function Mylist() {
    const { loading, data } = useQuery(QUERY_LISTS);
    const lists = data?.lists || [];

    return (
    <div className="flex flex-row h-screen w-screen overflow-auto">    
        <Header />
        <div className="flex flex-col justify-center items-center self-center h-full w-9/12 bg-[#001829]">
            <div className="flex justify-center items-center flex-col w-5/6 h-1/4">
                <p className="w-6/12 h-14 text-center text-[#f4edd6] border-b-4 border-sky-600 text-5xl font-serif" autoComplete="off">My Book Collections</p>
            </div>

            <div className="flex flex-col justify-top items-center flex-col  w-full h-full overflow-auto">
               <List lists={lists} />
            />
            </div>
        </div>
    </div>
    );
}
export default Mylist;