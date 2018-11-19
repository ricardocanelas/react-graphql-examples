import React from 'react'
import Loading from './Loading';

const FetchMore = (props) => {
   const {
      variables,
      updateQuery,
      fetchMore,
      children,
      loading,
      hasNextPage,
   } = props;

   const handleClick = () => {
      if (loading) return null;
      fetchMore({ variables, updateQuery });
   }

   return (
      <div className="FetchMore">
         {hasNextPage && (
            <button
               type="button"
               className="FetchMore-button"
               onClick={handleClick}
            >
               {loading ? (<Loading />) : children}
            </button>
         )}
      </div>
   )
}

export default FetchMore;
