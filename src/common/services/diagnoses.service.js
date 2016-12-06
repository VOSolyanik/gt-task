let storage = null;
export default class DiagnosesService {
    constructor($localStorage) {
        storage = $localStorage;
    }

    get(id) {
        id = parseInt(id) || null;
        if(!id) return;
        let diagnoses = storage.diagnoses || [];
        let diagnos = diagnoses.find(d => d.id === id);
        if(diagnos) {
            return diagnos;
        } else {
            console.error('cant find diagnose');
        }
    }

    queryByPatient(patientId) {
        patientId = parseInt(patientId) || null;
        let diagnoses = storage.diagnoses || [];
        let forPatient = diagnoses.filter(d => d.patientId === patientId && !d.deleteDate);
        return forPatient;
    }

    queryHistoryByPatient(patientId) {
        patientId = parseInt(patientId) || null;
        let diagnoses = storage.diagnoses || [];
        let forPatient = diagnoses.filter(d => d.patientId === patientId && d.deleteDate);
        return forPatient;
    }

    add(model) {
        let diagnoses = storage.diagnoses || [];
        let {code, diagnos, patientId} = model;
        let createDate = new Date();
        let response = new Diagnos(code, diagnos, createDate, null, patientId, diagnoses.length + 1);
        diagnoses.push(response);
        storage.diagnoses = diagnoses;
        return response;
    }

    update(model) {
        let diagnoses = storage.diagnoses || [];
        let diagnose = diagnoses.find(d => d.id === model.id);
        if(diagnose) {
            let {code, diagnos} = model;
            angular.extend(diagnose, {code, diagnos});
            storage.diagnoses = diagnoses;
        } else {
            console.error('cant find diagnose');
        }
        return diagnose;
    }

    delete(id) {
        let diagnoses = storage.diagnoses || [];
        let diagnose = diagnoses.find(d => d.id === id);
        if(diagnose) {
            diagnose.deleteDate = new Date();
        } else {
            console.error('cant find diagnose');
        }
        return diagnose;
    }
}

export class Diagnos {
    constructor(code, diagnos, createDate, deleteDate, patientId, id) {
        this.id = id;
        this.code = code;
        this.diagnos = diagnos;
        this.createDate = createDate;
        this.deleteDate = deleteDate;
        this.patientId = patientId;
    }
}

DiagnosesService.$inject = ['$localStorage'];