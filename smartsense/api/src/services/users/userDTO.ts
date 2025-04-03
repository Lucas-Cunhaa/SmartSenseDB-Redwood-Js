export class UserDTO {
    
    private name: string;
    private email: string;
    private pasword: string; 

    public constructor(name: string, email: string, pasword: string) {
        this.email = email; 
        this.name = name; 
        this.pasword = pasword;
    }

    private validateEmail(email: string) {
        if(email === null || email.trim() === "") throw new Error("I")
    }
}