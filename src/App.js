import "./App.css";
import { React, useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        telugu: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!firstName) newErrors.firstName = "First name is required.";
        else if (!/^[A-Za-z]+$/.test(firstName)) newErrors.firstName = "First name must contain only alphabets.";

        if (!lastName) newErrors.lastName = "Last name is required.";
        else if (!/^[A-Za-z]+$/.test(lastName)) newErrors.lastName = "Last name must contain only alphabets.";

        if (!email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";

        if (!contact) newErrors.contact = "Contact number is required.";
        else if (!/^\d{10}$/.test(contact)) newErrors.contact = "Contact number must be 10 digits.";

        if (!resume) newErrors.resume = "Resume is required.";

        if (!url) newErrors.url = "URL is required.";
        else if (!/^https?:\/\/\S+$/.test(url)) newErrors.url = "URL is invalid.";

        if (!selectedOption) newErrors.selectedOption = "You must select an option.";

        if (!about) newErrors.about = "About is required.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(
                firstName,
                lastName,
                email,
                contact,
                gender,
                selectedOption,
                subjects,
                resume,
                url,
                about
            );
            // Add your form submission logic here
        }
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        // Reset all state variables here
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            telugu: true,
            maths: false,
            physics: false,
        });
        setResume(null);
        setUrl("");
        setSelectedOption("");
        setAbout("");
        setErrors({});
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="firstname">
                        First Name*
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Enter First Name"
                        required
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Enter Last Name"
                        required
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                    <label htmlFor="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <label htmlFor="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Enter Mobile number"
                        required
                    />
                    {errors.contact && <span className="error">{errors.contact}</span>}
                    <label htmlFor="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Other
                    <label htmlFor="lang">
                        Your best Subject
                    </label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                        checked={subjects.english === true}
                        onChange={() =>
                            handleSubjectChange("english")
                        }
                    />
                    English
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                        checked={subjects.maths === true}
                        onChange={() =>
                            handleSubjectChange("maths")
                        }
                    />
                    Maths
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics === true}
                        onChange={() =>
                            handleSubjectChange("physics")
                        }
                    />
                    Physics
                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) =>
                            setResume(e.target.files[0])
                        }
                        placeholder="Enter Upload File"
                        required
                    />
                    {errors.resume && <span className="error">{errors.resume}</span>}
                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        value={url}
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        placeholder="Enter URL"
                        required
                    />
                    {errors.url && <span className="error">{errors.url}</span>}
                    <label>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                    </select>
                    {errors.selectedOption && <span className="error">{errors.selectedOption}</span>}
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        value={about}
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="About yourself"
                        required
                    ></textarea>
                    {errors.about && <span className="error">{errors.about}</span>}
                    <button
                        type="reset"
                        value="reset"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
