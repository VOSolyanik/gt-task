export default class PatientController {
    constructor($state, patientsService) {
        this.$state = $state;
        this.patientsService = patientsService;


        this.patient = angular.copy(patientsService.get($state.params.patientId));
    }

    save(e) {
        let response = null;
        if(this.patient.id) {
            response = this.patientsService.update(this.patient);
        } else {
            response = this.patientsService.add(this.patient);
        }
        if(response) {
            this.$state.go('app.clinicalInfo.patients.details.diagnoses', {patientId: response.id})
        }
    }
}

PatientController.$inject = ['$state','PatientsService'];
