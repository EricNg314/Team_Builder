function generateHTML (employees){
  const htmlStr = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  
    <style>
      /* Start RESET styles. */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
  
      html {
          height: 100%;
      }
  
      body {
        min-height: 100%;
        line-height: 1;
        font-family: sans-serif;
      }
  
      h1,h2,h3,h4,h5,h6 {
        font-size: 100%;
      }
  
      input,select,option,optgroup,textarea,button,pre,code {
        font-size: 100%;
        font-family: inherit;
      }
  
      ol,ul {
        list-style: none;
      }
      /* END RESET styles. */
  
      .material-icons{
        font-size: 24px;  /* Preferred icon size */
      }
  
    </style>
    <title>Team Builder - Eric</title>
  </head>
  
  <body class="">
    <header class="py-5 mb-5 border-bottom bg-primary text-light text-center">
        <span class="fs-4">Team Builder</span>
    </header>
    <main class="container">
      <div class="row justify-content-center">
        <div class="col-8 justify-content-center">
          <div class="row justify-content-center">
            ${employees}
            <!-- <section class="col-4 p-2">
              <div class="card">
                <div class="card-body bg-primary text-light">
                  <h2 class="card-title fs-4">Name</h2>
                  <div class="card-subtitle d-flex">
                    <span class="material-icons">supervisor_account</span>
                    <h3 class="mx-1">
                      <span>Manager</span>
                    </h3>
                  </div>
                </div>
                <div class="card-body bg-light">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 0</li>
                    <li class="list-group-item">
                      Email: <a class="card-link" href="mailto:example@example.com" target="_blank">example@example.com</a>
                    </li>
                    <li class="list-group-item">Office Number: 0</li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="col-4 p-2">
              <div class="card">
                <div class="card-body bg-primary text-light">
                  <h2 class="card-title fs-4">Name</h2>
                  <div class="card-subtitle d-flex">
                    <span class="material-icons">engineering</span>
                    <h3 class="mx-1">
                      <span>Engineer</span>
                    </h3>
                  </div>
                </div>
                <div class="card-body bg-light">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 0</li>
                    <li class="list-group-item">
                      Email: <a class="card-link" href="mailto:example@example.com" target="_blank">example@example.com</a>
                    </li>
                    <li class="list-group-item">GitHub: <a class="card-link" href="#" target="_blank">randomGitHub</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="col-4 p-2">
              <div class="card">
                <div class="card-body bg-primary text-light">
                  <h2 class="card-title fs-4">Name</h2>
                  <div class="card-subtitle d-flex">
                    <span class="material-icons">school</span>
                    <h3 class="mx-1">
                      <span>Intern</span>
                    </h3>
                  </div>
                </div>
                <div class="card-body bg-light">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 0</li>
                    <li class="list-group-item">
                      Email: <a class="card-link" href="mailto:example@example.com" target="_blank">example@example.com</a>
                    </li>
                    <li class="list-group-item">School: a school</li>
                  </ul>
                </div>
              </div>
            </section> -->
            
          </div>
        </div>
        
      </div>
    </main>
  
    <script>
    </script>
  </body>
  
  </html>
  `
  return htmlStr;
}

module.exports = generateHTML;