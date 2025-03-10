/* eslint-disable react/prop-types */


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useReadListBooks } from '../ListHooks/ListHooks';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};



export default function PageToRead() {
    
    let data = []
    const itemBook = useReadListBooks();
    console.log(itemBook);
    itemBook.map(item => {
        const { bookName, totalPages } = item
        const singleData =
        {
            name: bookName,
            uv: totalPages

        }
        const exist = data.find(book => book.name == bookName);

        if (!exist) {
            data.push(singleData)
        }

    },
    )
    return (
        <BarChart
            width={700}
            height={500}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            className='mt-10 mx-auto'
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
    );
}

// PageToRead()
