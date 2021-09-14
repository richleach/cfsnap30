export default function BlogElements({data}) {
    return (
        <div>
        {data.length == 0 && <h3>No comments yet...</h3>}
        {data.length == 1 && <h3>1 Comment</h3>}
        {data.length > 1 && <h3>{data.length} Comments</h3>}
        </div>
    )
}
