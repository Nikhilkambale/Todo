<template>
      <div class="container1">
        <div class="container">
            <div class="row mb-2">
                <div class="col-md-6">
                    <div
                        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="image">
                            <img src="../assets/steve.jpg" alt="no image" class="center">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col p-4 d-flex flex-column position-static" style="color:white; text-align: left;">
                        <strong class="d-inline-block mb-2 ">Hello my name is </strong>
                        <h3 class="mb-0">Steve Doe</h3>
                        <p class="mb-auto">I'm fullstack developer specialised in frontend and backend development
                            for complex scalable web apps.</p>
                        <button type="button" class="btn btn-primary">Hire me</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container2">
        <div class="container">
            <h1 class="mt-5">Skills Overview</h1>
            <div class="class1">
                <p>I have more than 8 years of experience building rich web applications for clients all over the
                    world.
                    Below is a quick overview of my main technical skill sets and tools I use.
                    Want to find out more about my experience?</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="round-image">
                        <img class="image-fluid" src="../assets/front.png" alt="Generic placeholder image">
                    </div>
                    <div class="shadow p-3 mb-5 bg-white rounded">

                        <h2>frontend</h2>
                        <ul>
                            <li>html</li>
                            <li>css</li>
                            <li>jaavscript</li>
                            <li>vue js</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="round-image">
                        <img class="image-fluid" src="../assets/back.png" alt="Generic placeholder image">
                    </div>
                    <div class="shadow p-3 mb-5 bg-white rounded">

                        <h2>backend</h2>
                        <ul>
                            <li>python</li>
                            <li>django</li>
                            <li>mongoDB</li>
                            <li>My SQL</li>
                        </ul>
                    </div>

                </div>
                <div class="col-lg-4">
                    <div class="round-image">
                        <img class="image-fluid" src="../assets/other.png" alt="Generic placeholder image">
                    </div>
                    <div class="shadow p-3 mb-5 bg-white rounded">


                        <h2>others</h2>
                        <ul>
                            <li>Unit testing</li>
                            <li>Devops</li>
                            <li>Data science</li>
                            <li>Graphic Design</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'about',
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
}
</script>
<style scoped>
.image img {
    display: flex;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 58%;
    margin-top: 15px;
}

.container2 {
    text-align: center;
    color: white;
}

.class1 {
    text-align: left;
}

.container1 {
    background-color: #32c6e8;
}

.round-image {
    border-radius: 100%;
    background-color: deepskyblue;
    padding: 10px;
    position: relative;
    top: 25px;
}

 .round-image img {
    width: 30px;
}

.col-lg-4 {
    text-align: center;

}
.col-lg-4 ul li {
    list-style: none;
    padding: 5px;
    list-style-position: inside;
    text-align: left;
}

.col-lg-4 ul li::before {
    content: '✓';
    margin-right: 10px;
    color: blue;
}

@media (min-width:990px) {
    .round-image {
        margin: 0px 150px 0px 150px;

    }

    .image img {
        width: 175px;
    }
}

@media (max-width:990px) and (min-width:767px) {
    .round-image {
        margin: 0px 280px 0px 280px;
    }
}
/* @media (max-width:767px) and (min-width:530px) {
    .round-image {
        margin: 0px 300px 0px 300px;
    }
} */



@media (max-width:767px) and (min-width:580px) {
    .round-image {
        margin: 0px 200px 0px 200px;
    }

}
@media (max-width:580px)  {
    .round-image {
        margin: auto;
        width: 55px;
    }
    .round-image img{
        width: 35px;
    }

}
.btn-primary {
    width: 100px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.395);
}
h2{
    padding-top: 25px;
}
.container h1{
  color: white;
}
</style>
