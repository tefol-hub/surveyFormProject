<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Student Survey Form</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <div class="form-body">
    <main>
      <body>
        <h1 id="title">Student Survey Form</h1>
        <p id="description">Please fill out the survey form below:</p>
        
        <form id="survey-form">
          <label id="name-label" for="name">Name: <input type="text" id="name" placeholder="Enter your name" required></label>
          <label id="email-label" for="email">Email: <input type="email" id="email" placeholder="Enter your email" required></label>
          <label id="number-label" for="number">Age: <input type="number" id="number" placeholder="Enter your age" min="10" max="25"></label>
          <label id="gender" for="gender">Gender: <select type="text" id="dropdown" placeholder="Your Gender?" required>
            <option value="">(select one)</option>
            <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
            </select></label>
          
          <fieldset>
            <legend>Select your grade: </legend>
            <div class="grades">
            <label>
              <input type="radio" name="radio" value="radio1"> Grade 8
            </label>
            <label>
              <input type="radio" name="radio" value="radio2"> Grade 9
            </label>
            <label>
            <input type="radio" name="radio" value="radio3"> Grade 10
            </label>
            <label>
            <input type="radio" name="radio" value="radio4"> Grade 11
            </label>
            <label>
            <input type="radio" name="radio" value="radio5"> Grade 12
            </label>
            </div>
          </fieldset>

          <fieldset class="teach">
            <label id="teacher-label" for="teacher">Who's your favorite teacher? <select type="text" id="teacher" placeholder="Favorite Teacher" required>
            <option value="">(select one)</option>
            <option value="1">Mr Brown</option>
                  <option value="2">Ms Pearl</option>
                  <option value="3">Mr Jim</option>
                  <option value="4">Mr Hwang</option>
                  <option value="5">Mr Rupanga</option>
                  <option value="6">Ms Little</option>
                  <option value="7">Mr Gordon</option>
                  <option value="8">Mr Lovelace</option>
            </select></label>
          </fieldset>
          
          <fieldset>
            <legend id="subjects-label">What subjects do you take? </legend>
            <label>
              <input type="checkbox" name="checkbox" value="maths"> Maths
            </label>
            <label>
              <input type="checkbox" name="checkbox" value="computers"> Computer Science 
            </label>
            <label>
              <input type="checkbox" name="checkbox" value="business-studies"> Business Studies
            </label>
            <label>
              <input type="checkbox" name="checkbox" value="geography"> Geography
            </label>
            <label>
              <input type="checkbox" name="checkbox" value="biology"> Biology
            </label>
            <label>
              <input type="checkbox" name="checkbox" value="chemistry"> Chemistry
            </label>
            <label>
              <input type="checkbox" name="checkbox" value="biology"> Biology
            </label>
            <label>
              <input type="checkbox" name="checkbox" value="physics"> Physics
            </label>
            <label>
              <input type="checkbox" name="checkbox" value="english"> English
            </label>
            <label>
              <input type="checkbox" name="checkbox" value="sesotho"> Sesotho
            </label>
          </fieldset>
          
          <label for="comments">Additional comments:</label>
          <textarea id="comments" rows="4" cols="50" placeholder="What do you like about the school..."></textarea>
          
          <input type="submit" id="submit" value="Submit">
        </form>
      </body>
    </main>
  </div>
</html>

export default Home;