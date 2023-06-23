import { useMemo } from "react";

const useQueryParams = (search) => {
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  queryParams.append("name", "prasad");
  queryParams.append("mailId", "pn@test.com");

  //    Without useMemo hook
  //   const queryParamsMap = Array.from(queryParams.entries()).reduce(
  //     (accumulator, value, index) => {
  //       accumulator[index] = value;
  //       return accumulator;
  //     }
  //   );

  const queryParamsMap = useMemo(
    () =>
      [...queryParams.entries()].reduce((map, [key, value]) => {
        map[key] = value;
        return map;
      }, {}),
    [queryParams]
  );

  return Object.assign(queryParams, { map: queryParamsMap });
};

export default useQueryParams;
