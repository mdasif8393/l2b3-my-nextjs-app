
const page = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h1>Single product: {params.productId} {searchParams.category}</h1>
        </div>
    );
};

export default page;