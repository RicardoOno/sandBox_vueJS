<template>
    <div class="container">
        <form v-if="submitted == false">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <form>
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <h1 class="text-center">Login</h1>
                                <hr>

                                <app-full-name label="First Name" type="text" v-model="fsName" id="lblfsName" ></app-full-name>
                                <app-full-name label="Last Name"  type="text" id="lbllsName" v-model = "lsName"></app-full-name>

                                <div class="form-group">
                                    <label for="email">Mail</label>
                                    <input
                                            type="email"
                                            id="email"
                                            v-model="mail"
                                            class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input
                                            type="password"
                                            id="password"
                                            v-model="password"
                                            class="form-control">
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                                <label>Save your information?</label><br>
                                <label for="true">
                                    <input
                                            type="radio"
                                            id="male"
                                            value="Yes"
                                            v-model="store" > Yes
                                </label>
                                <label for="false">
                                    <input
                                            type="radio"
                                            id="female"
                                            value="No"
                                            v-model="store"> No
                                </label>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <button
                                        type="submit"
                                        class="btn btn-primary"
                                        @click.prevent="submitted = true">Submit!
                                </button>
                            </div>
                        </div>
                    </form>


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <div v-else class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fsName }} {{ lsName }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }} </p>
                        <p>Store in Database?: {{ store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        components: {
            appFullName: FullName
        },
        data: () => {
            return {
                fsName: 'Ricardo',
                lsName: 'Ono',
                mail: null,
                password: null,
                store: 'Yes',
                submitted: false
            }
        },
        mounted(){
            console.log('mounted');
        },
        updated(){
            this.$on('asD', (data) => {
                console.log(data);
                this.fsName = data;
            });
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        }
    }
</script>

<style>
</style>
