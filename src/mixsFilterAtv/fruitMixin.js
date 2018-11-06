/**
 * Created by Tadashi on 05/11/2018.
 */
export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon', 'Watermelon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
    created(){
        console.log('created');
    }
};