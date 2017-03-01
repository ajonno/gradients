export default function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

/*
usage example:

   import renderIf from '../../utils/renderIf';

   render() {
      return (
         {renderIf(this.state.isUserLoggedIn,
           <LogOutButton />
         )}
      );
   }



*/
