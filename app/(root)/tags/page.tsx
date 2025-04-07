import { getTags } from "@/lib/actions/tags.action";

/* eslint-disable react/react-in-jsx-scope */
const Tags = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 10,
    // query: "javascript",
  });

  const tags = data || {};
  console.log("Tags", JSON.stringify(tags, null, 2));
  return <div>Tags</div>;
};

export default Tags;
