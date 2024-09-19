const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const lang = urlParams.get('prog-lang')
const start = urlParams.get('start')

function paramerterTest(parameter) {
    if (parameter !== undefined){
        location.replace("https://stuffzez.github.io/Coding/signup")
    }
}

function getAccessCode() {
    if (lang == "option1") {
        if (start == "option1") {
            return "1001"
        } else {
            if (start == "option2") {
                return "1002"
            } else {
                if (start == "option3") {
                    return "1003"
                } else {
                    if (start !== undefined) {
                        return "0000"
                    } else {
                        return "0000"
                    }
                }
            }
        }
    } else {
        if (lang == "option2") {
            if (start == "option1") {
                return "2001"
            } else {
                if (start == "option2") {
                    return "2002"
                } else {
                    if (start == "option3") {
                        return "2003"
                    } else {
                        if (start !== undefined) {
                            return "0000"
                        } else {
                            return "0000"
                        }
                    }
                }
            }
        } else {
            if (lang == "option3") {
                if (start == "option1") {
                    return "3001"
                } else {
                    if (start == "option2") {
                        return "3002"
                    } else {
                        if (start == "option3") {
                            return "3003"
                        } else {
                            if (start !== undefined) {
                                return "0000"
                            } else {
                                return "0000"
                            }
                        }
                    }
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("accessCode").innerText = getAccessCode();
});