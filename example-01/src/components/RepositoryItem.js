import React from 'react'
import RepositoryStar from './RepositoryStar'
import RepositoryWatch from './RepositoryWatch'

class RepositoryItem extends React.Component {

   render() {
      const { name, primaryLanguage, descriptionHTML, stargazers, watchers } = this.props;

      return (
         <div className="card">
            <div className="card-title">
               {name} ({stargazers.totalCount}) ({watchers.totalCount})
               <RepositoryStar {...this.props} />
               <RepositoryWatch {...this.props} />
               <small>{primaryLanguage.name}</small>
            </div>
            <div className="card-body">
               <div
                  className="RepositoryItem-description-info"
                  dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
            </div>

         </div>
      )
   }
}

export default RepositoryItem;
