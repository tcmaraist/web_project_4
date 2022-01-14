export default class UserInfo {
    constructor({ nameSelector, aboutSelector, profileImageSelector}) {
        this._name = document.querySelector(nameSeletor);
        this._about = document.querySelector(aboutSelector);
        this._profileImage = document.querySelector(profileImageSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
            profileImage: this._profileImage.src,
            _id: this._id;
        }
    }

    setUserInfo(userData) {
        this._name.textContent = userData.name;
        this._about.textContent = userData.about;
        this._id = userData._id;
    }

    setProfileImage(link) {
        this._profileImage.src = link
    }
}