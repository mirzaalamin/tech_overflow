import qs from "query-string";

interface urlQueryParams {
  params: string;
  key: string;
  value: string;
}
interface removeKeysFromQueryParams {
  params: string;
  keysToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: urlQueryParams) => {
  const queryString = qs.parse(params);
  queryString[key] = value;

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const removeKeysFromQueryUrl = ({
  params,
  keysToRemove,
}: removeKeysFromQueryParams) => {
  const queryString = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  );
};
