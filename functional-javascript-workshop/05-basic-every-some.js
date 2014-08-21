function checkUsersValid(goodUsers) {
      return function(submittedUsers) {
        return submittedUsers.every(function(submittedUsers) {
            return goodUsers.some(function(user){
              return user.id === submittedUsers.id;
            })
        })
      };
    }
    
    module.exports = checkUsersValid