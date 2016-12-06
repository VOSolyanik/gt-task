export default class PatientsController {
    constructor($state, patientsService) {
        this.patient = patientsService.get($state.params.patientId);
    }
}

PatientsController.$inject = ['$state','PatientsService'];
