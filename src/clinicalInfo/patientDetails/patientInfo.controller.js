export default class PatientInfoController {
    constructor($state, patientsService) {
        if($state.params.patientId){
            this.patient = patientsService.get($state.params.patientId);
        }
        console.log(this.patient)
    }
}

PatientInfoController.$inject = ['$state','PatientsService'];
