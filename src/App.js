import { Typography, Divider } from 'antd';

import Filters from './components/Filters';
import TodoList from './components/TodoList';

const {Title} = Typography;
export default function App() {
  return (
   <div
   className="w-[500px] mx-auto mt-[10px] flex flex-col bg-white p-[20px] rounded-[5] h-[90vh] shadow-shadow ">

<Title style={{ textAlign: 'center' }}>To do list</Title>
      <Filters/>
      <Divider />
     <TodoList/>
   </div>
  )
}