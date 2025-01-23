/**
 * Contains the miscellaneous route handlers.
 * @author Mohamed Yassine Nabat <https://github.com/YassineNabat>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;