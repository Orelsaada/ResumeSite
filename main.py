from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')


@app.route("/resume")
def resume():
    return render_template('resume.html', title="Resume")


@app.route("/contact")
def contact():
    return render_template('contact.html', title="Contact")


if __name__ == '__main__':
    app.run(debug=True)