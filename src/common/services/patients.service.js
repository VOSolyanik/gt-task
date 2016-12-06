let storage = null;
export default class PatientsService {
    constructor($localStorage) {
        storage = $localStorage;
        this.currentPatient = {};
    }

    get(id) {
        id = parseInt(id) || null;
        console.log('get', id);
        if(this.currentPatient.id === id) return this.currentPatient;

        let patients = storage.patients || [];
        let patient = patients.find(p => p.id === id);
        if(patient) {
            angular.extend(this.currentPatient, patient);
        } else {
            this.currentPatient = new Patient();
            this.currentPatient.id = null;
        }
        return this.currentPatient;
    }

    add(model) {
        let patients = storage.patients || [];
        let response = new Patient(model.name, model.dob, model.address, patients.length + 1);
        patients.push(response);
        storage.patients = patients;        
        return response;
    }

    update(model) {
        let patients = storage.patients || [];
        let patient = patients.find(p => p.id === model.id);
        if(patient) {
            let {name, dob, address} = model;
            angular.extend(patient, {name, dob, address});
            angular.extend(this.currentPatient, {name, dob, address});
            storage.patients = patients;
        } else {
            console.error('cant find patient')
        }
        return patient;
    }
}

class Patient {
    constructor(name, dob, address, id) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.address = address;
    }
}

PatientsService.$inject = ['$localStorage'];