import {Diagnos} from '../../../common/services/diagnoses.service';

export default class DiagnoseController {
    constructor($state, diagnosesService) {
        this.$state = $state;
        this.diagnosesService = diagnosesService;

        this.diagnos = null;
        if(this.$state.current.name.indexOf('diagnoseEdit') > -1) {
            this.diagnos = this.diagnosesService.get(this.$state.params.diagnosId);
        } else {
            this.diagnos = new Diagnos();
            this.diagnos.patientId = parseInt(this.$state.params.patientId) || null;
        }
    }

    save(e) {
        let response = null;
        if(this.diagnos.id) {
            response = this.diagnosesService.update(this.diagnos);
        } else {
            response = this.diagnosesService.add(this.diagnos);
        }
        if(response) {
            this.$state.go('app.clinicalInfo.patients.details.diagnoses', {patientId: response.patientId});
        }
    }
}

DiagnoseController.$inject = ['$state','DiagnosesService'];
