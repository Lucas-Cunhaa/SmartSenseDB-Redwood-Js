// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set} from '@redwoodjs/router'
import SmartsenseLayout from './layouts/SmartsenseLayout/SmartsenseLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SmartsenseLayout}>
        <Route path="/homepage" page={HomePage} name="home-page" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
