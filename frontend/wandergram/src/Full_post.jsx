export default function FullPost() {
    return (
        <div className="card lg:card-side bg-base-100 ">
            <figure>
                <img src={data.picture} alt="Post Image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    )
}
