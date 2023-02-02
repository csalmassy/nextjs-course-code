import classes from './comment-list.module.css';

function CommentList(props) {
  const { items } = props;
  const renderedItems = items.map((item) => (
    <li key={item._id}>
      <p>{item.text}</p>
      <div>
        By <address>{item.name}</address>
      </div>
    </li>
  ));

  return <ul className={classes.comments}>{renderedItems}</ul>;
}

export default CommentList;
