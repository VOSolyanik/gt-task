export default class PatientDiagnosesController {
    constructor($state, patientsService, diagnosesService) {
        this.diagnosesService = diagnosesService;
        this.patientsService = patientsService;
        
        this.patient = patientsService.get($state.params.patientId);
        this.diagnoses = this.diagnosesService.queryByPatient(this.patient.id);
        this.history = this.diagnosesService.queryHistoryByPatient(this.patient.id);

    }

    deleteDiagnose(index) {
        let diagnose = this.diagnoses.splice(index, 1)[0];
        this.diagnosesService.delete(diagnose.id);
        this.history = this.diagnosesService.queryHistoryByPatient(this.patient.id);        
    }
}

PatientDiagnosesController.$inject = ['$state','PatientsService', 'DiagnosesService'];
