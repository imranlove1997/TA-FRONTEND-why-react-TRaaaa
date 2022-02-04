import articleData from '../data';
import PropTypes from 'prop-types';

function Articles() {
    return (
        <>
        <h2 className="article-header">Articles</h2>
        <div className="container flex wrap">
            {articleData.map((element) => {
                return <Article contents={element} />;
            })}
        </div>
        </>
    )
}

function Article(props) {
    return (
        <div className="article-content">
        <img className="article-img" src={props.contents.urlToImage} alt="Article Image"></img>
        <p className="article-title">{props.contents.title}</p>
        </div>
    );
}

Article.propTypes = {
    urlToImage: PropTypes.string,
    title: PropTypes.string,
}

export default Articles;