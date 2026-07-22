import React from 'react'
import RestaurantAddress from './RestaurantAddress'
import RestaurantBankingAndDocuments from './RestaurantBankingAndDocuments'
import RestaurantSocialMediaLinks from './RestaurantSocialMediaLinks'

const index = () => {
  return (
<>
    <div className="overflow-y-auto h-full p-2 space-y-2">
      <RestaurantAddress/>
      <RestaurantBankingAndDocuments/>
      <RestaurantSocialMediaLinks/> 
    </div>
</>
  )
}

export default index