/**
 * Created by Tadashi on 05/11/2018.
 */
export const textJoke = {
    computed: {
        stringWcounter(){
            console.log('al');
            let x = this.text2.length;
            return this.text2 + ' (' + x +')';
        }
    }
};