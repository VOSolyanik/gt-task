route.$inject = ['$stateProvider'];

export default function route($stateProvider) {
    $stateProvider
        .state('app.clinicalInfo.patients.details', {
            url: '{patientId}/',
            abstract: true,
            views: {
                "": {
                    template: '<ui-view></ui-view>'
                },
                "patientInfo@app.clinicalInfo.patients": {
                    template: require('./patientInfo.tpl.html'),
                    controller: 'PatientInfoController',
                    controllerAs: 'ctrl'
                }
            }
        })
        .state('app.clinicalInfo.patients.details.edit', {
            url: 'edit',
            template: require('./patient.tpl.html'),
            controller: 'PatientController',
            controllerAs: 'ctrl'
        })
        .state('app.clinicalInfo.patients.details.diagnoses', {
            url: 'diagnoses',
            template: require('./patientDiagnoses.tpl.html'),
            controller: 'PatientDiagnosesController',
            controllerAs: 'ctrl'
        })
        .state('app.clinicalInfo.patients.details.diagnoseEdit', {
            url: 'diagnoses/{diagnosId}/edit',
            template: require('./diagnose.tpl.html'),
            controller: 'DiagnoseController',
            controllerAs: 'ctrl'
        })
        .state('app.clinicalInfo.patients.details.diagnoseAdd', {
            url: 'diagnoses/new',
            template: require('./diagnose.tpl.html'),
            controller: 'DiagnoseController',
            controllerAs: 'ctrl'
        });
}
