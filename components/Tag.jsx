import '../app/globals.css'
const Tag=({data})=>{
    return <li className="li"><button className="!bg-gray-100  block whitespace-nowrap text-ellipsis hover:!bg-gray-300 font-medium flex-wrap text-sm text-black px-3 my-3 mr-3 h-8 rounded-md">{data}</button></li>
}
export default Tag