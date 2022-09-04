export class Utils {
    

    public static IsStringEmpty(value?: string  | null){
        return (value == undefined || value == null || value.length == 0);
    }
}