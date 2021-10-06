// index.js
import client from "../client";
import MultiLineText from "../components/MultiLineText";
import RichText from "../components/RichText";

const Index = (props) => {
  return (
    <div className="u-container">
      {!props.error ? <>
        <RichText>
          <h1>{props.title}</h1>
          <MultiLineText text={props.description} />
        </RichText>
      </> : <>
        <p>Site settings not found</p>
      </>}
    </div>
  );
};

Index.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  const results = await client.fetch(`*[_type == "siteSettings"]`, { slug });

  if (!results.length) {
    return {
      error: true
    };
  }

  return {
    ... results[0]
  };
};

export default Index;
