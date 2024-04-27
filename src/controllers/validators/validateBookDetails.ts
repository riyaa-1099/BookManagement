class RegistrationValidator {
  validateRegistration(bookName: string, authorName: string, category: string, publicationYear: number, price: number): boolean {
 
    if (!bookName || !authorName || !category || !publicationYear || !price) {
      return false;
    }
  

    return true;
  }
}

export default RegistrationValidator;
